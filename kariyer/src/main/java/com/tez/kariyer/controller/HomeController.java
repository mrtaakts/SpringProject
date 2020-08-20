package com.tez.kariyer.controller;

import com.tez.kariyer.model.entity.User;
import com.tez.kariyer.security.SessionInfo;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@RestController
public class HomeController {

    @GetMapping({ "/", "/login" })
    public ModelAndView login(HttpServletRequest request){
        ModelAndView modelAndView = new ModelAndView("Login");
        return modelAndView;
    }

    @GetMapping("/anasayfa")
    public ModelAndView showMainPAage(Model model){
        ModelAndView modelAndView = new ModelAndView("index");
        return modelAndView;
    }
}
