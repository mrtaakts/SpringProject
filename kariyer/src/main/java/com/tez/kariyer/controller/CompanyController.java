package com.tez.kariyer.controller;

import com.tez.kariyer.dto.JobPostDTO;
import com.tez.kariyer.model.entity.Company;
import com.tez.kariyer.model.entity.JobPosting;
import com.tez.kariyer.model.entity.User;
import com.tez.kariyer.model.entity.address.Il;
import com.tez.kariyer.model.entity.address.Ilce;
import com.tez.kariyer.model.entity.address.Ulke;
import com.tez.kariyer.model.entity.parameterTable.*;
import com.tez.kariyer.model.repository.CompanyRepository;
import com.tez.kariyer.model.repository.UserRepository;
import com.tez.kariyer.model.repository.WorkExperienceRepository;
import com.tez.kariyer.model.repository.addressRepository.CityRepository;
import com.tez.kariyer.model.repository.addressRepository.CountryRepository;
import com.tez.kariyer.model.repository.addressRepository.DistrictRepository;
import com.tez.kariyer.model.repository.parameterTableRepository.*;
import com.tez.kariyer.response.ResponseItem;
import com.tez.kariyer.security.SessionInfo;
import com.tez.kariyer.service.CompanyService;
import com.tez.kariyer.service.JobPostingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.time.LocalDateTime;
import java.util.*;

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
    @Autowired
    CompanyRepository companyRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    CompanyService companyService;

    @GetMapping("/profil")
    public ModelAndView getprofile(Model model){
        User user = SessionInfo.getInstance().getUser();
        Company company = companyRepository.findByUser(user.getId());
        model.addAttribute("company",company);
        List<JobPosting> jobPosting= companyService.getCompanysJobPosts();
        model.addAttribute("jobposting",jobPosting);
        ModelAndView mav = new ModelAndView("FirmaProfil");
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


    @GetMapping("/kayıt")
    public ModelAndView CompanyCreate(Model model){
        ModelAndView mav = new ModelAndView("CompanyCreate");
        List<Il> city = (List<Il>) cityRepository.findAll();
        model.addAttribute("city",city);
        return mav;                                        // ilanlar listeleme sayfası
    }


    @PostMapping("/save")
    @ResponseBody
    public ResponseItem saveJobPost(@RequestBody JobPostDTO jobPostDTO){
        ResponseItem responseItem = new ResponseItem();
        Date date= new Date();
        try {
            jobPostDTO.setStartDate(date.toString());
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
