package com.tez.kariyer.controller;

import com.google.gson.Gson;
import com.tez.kariyer.dto.UserDTO;
import com.tez.kariyer.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/admin")
public class AdminController {
    @Autowired
    AdminService adminService;

    @RequestMapping(value = "/data", method = RequestMethod.POST)
    @ResponseBody
    public String getAllArac() {
        //Data Table
        List<UserDTO> aracDataTableObjects = adminService.DataResponse();
        String jsonData = new Gson().toJson(aracDataTableObjects);
        return jsonData;
    }

}
