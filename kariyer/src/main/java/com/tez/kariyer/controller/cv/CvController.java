package com.tez.kariyer.controller.cv;

import com.tez.kariyer.model.entity.CommunicationInfo;
import com.tez.kariyer.model.entity.SummaryInfo;
import com.tez.kariyer.model.entity.UserPrivateInfo;
import com.tez.kariyer.model.entity.WorkExperience;
import com.tez.kariyer.response.ResponseItem;
import com.tez.kariyer.service.cvService.CvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping(value = "/cv")
@CrossOrigin("*")
public class CvController {

    @Autowired
    protected CvService cvService;

    @PostMapping("/iletisim")
    public ResponseEntity<ResponseItem> saveCommunicationInfo(@RequestParam CommunicationInfo communicationInfo){
        ResponseItem responseItem = new ResponseItem();
        responseItem = cvService.saveCommunicationInfo(communicationInfo);
        return ResponseEntity.ok(responseItem);
    }

    @PostMapping("/ozel")
    public ResponseEntity<ResponseItem> saveUserPrivateInfo(@RequestParam UserPrivateInfo userPrivateInfo){
        ResponseItem responseItem = new ResponseItem();
        responseItem = cvService.saveUserPrivateInfo(userPrivateInfo);
        return ResponseEntity.ok(responseItem);
    }

    @GetMapping("/mert")
    public ModelAndView Show(){
        ModelAndView modelAndView= new ModelAndView("KayitOl");
        return modelAndView;
    }

    @PostMapping("/ozet")
    @ResponseBody
    public ResponseEntity<ResponseItem> saveSummaryInfo(@RequestBody SummaryInfo summaryInfo){
        ResponseItem responseItem = new ResponseItem();
        responseItem = cvService.saveSummaryInfo(summaryInfo);
        return ResponseEntity.ok(responseItem);
    }

    @PostMapping("/deneyim")
    public ResponseEntity<ResponseItem> saveWorkExperience(@RequestParam WorkExperience workExperience){
        ResponseItem responseItem = new ResponseItem();
        responseItem = cvService.saveWorkExperience(workExperience);
        return ResponseEntity.ok(responseItem);
    }

}
