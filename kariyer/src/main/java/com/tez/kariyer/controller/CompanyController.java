package com.tez.kariyer.controller;

import com.tez.kariyer.dto.CompanyDTO;
import com.tez.kariyer.response.ResponseItem;
import com.tez.kariyer.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping(value = "/firma")
public class CompanyController {

    @Autowired
    CompanyService companyService;


    @GetMapping("/kayit")
    public ModelAndView saveCompany(Model model){
        ModelAndView mav = new ModelAndView("KayitOl");
        return mav;
    }


    @PostMapping("/save")
    @ResponseBody
    public ResponseItem saveCompany(@RequestBody CompanyDTO companyDTO){
        ResponseItem responseItem = new ResponseItem();

        try {
            companyService.saveCompany(companyDTO);
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
