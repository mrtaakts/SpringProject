package com.tez.kariyer.api;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/fake")
@CrossOrigin("*")
public class Fake {
    @GetMapping("/getAll")
    public List<FakeModel> getAllFakes(){
        List<FakeModel> fakes=new ArrayList<>();
        for(int i =0 ;i<10;i++){
            FakeModel fake=new FakeModel("volkan","can","3year");
            fakes.add(fake);
        }
        return fakes;
    }
}
