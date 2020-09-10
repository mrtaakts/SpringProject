package com.tez.kariyer.controller;

import com.google.gson.Gson;
import com.tez.kariyer.dto.UserDTO;
import com.tez.kariyer.model.entity.User;
import com.tez.kariyer.model.repository.UserRepository;
import com.tez.kariyer.response.ResponseItem;
import com.tez.kariyer.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
@RequestMapping(value = "/admin")
public class AdminController {
    @Autowired
    AdminService adminService;
    @Autowired
    UserRepository userRepository;

    @RequestMapping(value = "/data", method = RequestMethod.POST)
    @ResponseBody
    public String getAllUser() {
        //Data Table
        List<UserDTO> aracDataTableObjects = adminService.DataResponse();
        String jsonData = new Gson().toJson(aracDataTableObjects);
        return jsonData;
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    @ResponseBody
    public ResponseItem deleteUser(int id) {
        ResponseItem responseItem = new ResponseItem();
        responseItem = adminService.delete(id);
        return responseItem;
    }

    @GetMapping(value = "/update")
    public ModelAndView update(int id, Model model){
        ModelAndView modelAndView = new ModelAndView("AdminUserGuncelle");
        User user = userRepository.findByID(id);
        model.addAttribute("user", user);
        return modelAndView;
    }

    @PostMapping(value = "/save")
    @ResponseBody
    public ResponseItem save(@RequestBody UserDTO userDTO){
        ResponseItem responseItem = new ResponseItem();
        responseItem = adminService.save(userDTO);
        return responseItem;
    }

}
