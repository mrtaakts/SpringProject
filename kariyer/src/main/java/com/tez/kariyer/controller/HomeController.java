package com.tez.kariyer.controller;

import com.tez.kariyer.model.entity.JobPosting;
import com.tez.kariyer.model.entity.User;
import com.tez.kariyer.model.repository.JobPostingRepository;
import com.tez.kariyer.model.repository.UserRepository;
import com.tez.kariyer.security.SessionInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
public class HomeController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    JobPostingRepository jobPostingRepository;

    @GetMapping({ "/", "/login" })
    public ModelAndView login(HttpServletRequest request){
        ModelAndView modelAndView = new ModelAndView("Login");
        return modelAndView;
    }

    @GetMapping("/anasayfa")
    public ModelAndView showMainPAage(Authentication authentication, Model model){
        List<JobPosting> jobPosting= (List<JobPosting>) jobPostingRepository.findAll();
        model.addAttribute("job",jobPosting);
        User user = userRepository.findByUsername(authentication.getName());
        SessionInfo.getInstance().setUser(user);
        ModelAndView modelAndView = new ModelAndView("index");
        return modelAndView;
    }

    @GetMapping("/password")
    public ModelAndView passwordReset(){
        ModelAndView modelAndView = new ModelAndView("PasswordReset");

        return modelAndView;
    }
}
