package com.tez.kariyer.controller;

import com.tez.kariyer.dto.CompanyDTO;
import com.tez.kariyer.dto.JobAdvertiDTO;
import com.tez.kariyer.dto.JobPostDTO;
import com.tez.kariyer.model.entity.WorkExperience;
import com.tez.kariyer.model.entity.address.Il;
import com.tez.kariyer.model.entity.address.Ilce;
import com.tez.kariyer.model.entity.address.Ulke;
import com.tez.kariyer.model.entity.parameterTable.*;
import com.tez.kariyer.model.repository.WorkExperienceRepository;
import com.tez.kariyer.model.repository.addressRepository.CityRepository;
import com.tez.kariyer.model.repository.addressRepository.CountryRepository;
import com.tez.kariyer.model.repository.addressRepository.DistrictRepository;
import com.tez.kariyer.model.repository.parameterTableRepository.*;
import com.tez.kariyer.response.ResponseItem;
import com.tez.kariyer.service.JobPostingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/firma")
public class CompanyController {

    @Autowired
    JobPostingService jobPostingService;
    @Autowired
    CountryRepository countryRepository;
    @Autowired
    CityRepository cityRepository;
    @Autowired
    DistrictRepository districtRepository;
    @Autowired
    DriverLicenseRepository driverLicenseRepository;
    @Autowired
    CompanySectorRepository companySectorRepository;
    @Autowired
    BusinessAreaRepository businessAreaRepository;
    @Autowired
    PositionRepository positionRepository;
    @Autowired
    WayOfWorkRepository wayOfWorkRepository;
    @Autowired
    WorkExperienceRepository workExperienceRepository;


    @GetMapping("/profil")
    public ModelAndView getprofile(Model model){
        ModelAndView mav = new ModelAndView("KayitOl");
        return mav;                                        // firması bilgisi sayfası
    }
    @GetMapping("/ilanver")
        public ModelAndView saveJobPosting(Model model){
            ModelAndView mav = new ModelAndView("JobPost");
            List<Ulke> country = (List<Ulke>) countryRepository.findAll();
            List<Il> city = (List<Il>) cityRepository.findAll();
            List<Ilce> district = (List<Ilce>) districtRepository.findAll();
            List<DriverLicense> driverLicences = (List<DriverLicense>) driverLicenseRepository.findAll();
            List<CompanySector> companySectors= (List<CompanySector>) companySectorRepository.findAll();
            List<BusinessArea> businessAreas = (List<BusinessArea>) businessAreaRepository.findAll();
            List<Position> position = (List<Position>) positionRepository.findAll();
            List<WayOfWork> wayOfWork= (List<WayOfWork>) wayOfWorkRepository.findAll();
            model.addAttribute("country",country);
            model.addAttribute("city",city);
            model.addAttribute("district",district);
            model.addAttribute("licence",driverLicences);
            model.addAttribute("companysector",companySectors);
            model.addAttribute("businessArea",businessAreas);
            model.addAttribute("position",position);
            model.addAttribute("wayofwork",wayOfWork);
            return mav;                                        // ilan ekleme sayfası
        }
        @GetMapping("/ilanlarim")
        public ModelAndView JobPostings(Model model){
            ModelAndView mav = new ModelAndView("KayitOl");
            return mav;                                        // ilanlar listeleme sayfası
        }


    @PostMapping("/save")
    @ResponseBody
    public ResponseItem saveCompany(@RequestBody JobPostDTO jobPostDTO){
        ResponseItem responseItem = new ResponseItem();


        try {
            jobPostingService.saveJobPost(jobPostDTO);
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
