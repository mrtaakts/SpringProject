package com.tez.kariyer.controller;

import com.tez.kariyer.dto.PasswordResetDTO;
import com.tez.kariyer.model.entity.User;
import com.tez.kariyer.model.repository.UserRepository;
import com.tez.kariyer.response.ResponseItem;
import com.tez.kariyer.util.MailUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.Map;
import java.util.Random;

@RestController
public class PasswordResetController {

    @Autowired
    MailUtil mailUtil;
    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping("/password")
    public ModelAndView passwordreset(@RequestParam Map<String , String > allRequestParam){
        ResponseItem responseItem = new ResponseItem();
        try {
            if (userRepository.getEmail(allRequestParam.get("email")) == null){
                responseItem.setResult(false);
                responseItem.setMessage("Kullanıcı bulunamadı.");
            }else {
                User user = userRepository.getEmail(allRequestParam.get("email"));
                int max=99999;
                int min=10000;
                Random random = new Random();
                int password = random.nextInt((max-min)+1)+min;
                user.setPassword(passwordEncoder.encode(String.valueOf(password)));
                userRepository.save(user);
                String subject = "Sifre Yenileme Hk.";
                String text ="Sayın "+ user.getName()+ " " + user.getSurname()+","+ "<br>" +"Güvenliğiniz için şifrenizi biz atadık dilerseniz uygulama içerisinden şifrenizi güncelleyebilirsiniz..." +
                        "<br>" + "Yeni Şifreniz: "+ password;
                mailUtil.sendMail(user.getEmail(),text,subject);
                responseItem.setResult(true);
                responseItem.setMessage("İşlem Başarılı");
            }
        }catch (Exception e){
            e.printStackTrace();
        }

        return new ModelAndView("Login");
    }

}
