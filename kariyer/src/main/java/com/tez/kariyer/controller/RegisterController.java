package com.tez.kariyer.controller;

import com.tez.kariyer.dto.UserDTO;
import com.tez.kariyer.model.entity.User;
import com.tez.kariyer.model.repository.UserRepository;
import com.tez.kariyer.response.ResponseItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping(value = "/uyelik")
public class RegisterController {

    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder passwordEncoder;

    @GetMapping("/olustur")
    public ModelAndView show(Model model){
        ModelAndView mav = new ModelAndView("KayitOl");
        return mav;
    }

    @PostMapping("/save")
    @ResponseBody
    public ResponseItem saveUser(@RequestBody UserDTO userDTO){
        ResponseItem responseItem = new ResponseItem();

        try {
            User user = new User();
            user.setEmail(userDTO.getEmail());
            user.setName(userDTO.getName());
            user.setSurname(userDTO.getSurname());
            user.setUsername(userDTO.getUsername());
            user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
            userRepository.save(user);
            responseItem.setMessage("İşlem Başarılı!");
            responseItem.setResult(true);
            return responseItem;
        }catch (Exception e){
            responseItem.setResult(false);
            responseItem.setMessage("İşlem Başarısız...");
            e.printStackTrace();
            return responseItem;
        }
    }

}
