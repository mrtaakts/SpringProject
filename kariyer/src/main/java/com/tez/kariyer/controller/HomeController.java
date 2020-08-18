package com.tez.kariyer.controller;

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
    public ModelAndView showMainPAage(){
        ModelAndView modelAndView = new ModelAndView("index");

        return modelAndView;
    }
}
