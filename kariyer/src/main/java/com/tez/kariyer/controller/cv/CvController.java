package com.tez.kariyer.controller.cv;

import com.tez.kariyer.dto.CommunicationInfoDTO;
import com.tez.kariyer.dto.SummaryInfoDTO;
import com.tez.kariyer.dto.UserPrivateInfoDTO;
import com.tez.kariyer.dto.WorkExperienceDTO;
import com.tez.kariyer.model.entity.*;
import com.tez.kariyer.model.entity.address.Il;
import com.tez.kariyer.model.entity.address.Ilce;
import com.tez.kariyer.model.entity.address.Ulke;
import com.tez.kariyer.model.entity.parameterTable.*;
import com.tez.kariyer.model.repository.CommunicationInfoRepository;
import com.tez.kariyer.model.repository.SummaryInfoRepository;
import com.tez.kariyer.model.repository.UserPrivateInfoRepository;
import com.tez.kariyer.model.repository.WorkExperienceRepository;
import com.tez.kariyer.model.repository.addressRepository.CityRepository;
import com.tez.kariyer.model.repository.addressRepository.CountryRepository;
import com.tez.kariyer.model.repository.addressRepository.DistrictRepository;
import com.tez.kariyer.model.repository.parameterTableRepository.*;
import com.tez.kariyer.response.ResponseItem;
import com.tez.kariyer.security.SessionInfo;
import com.tez.kariyer.service.cvService.CvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
@RequestMapping(value = "/cv")
@CrossOrigin("*")
public class CvController {

    @Autowired
    protected CvService cvService;
    @Autowired
    protected PositionRepository positionRepository;
    @Autowired
    protected CompanySectorRepository companySectorRepository;
    @Autowired
    protected WayOfWorkRepository wayOfWorkRepository;
    @Autowired
    protected CityRepository cityRepository;
    @Autowired
    protected WorkExperienceRepository workExperienceRepository;
    @Autowired
    protected CountryRepository countryRepository;
    @Autowired
    protected DriverLicenseRepository driverLicenseRepository;
    @Autowired
    protected CommunicationInfoRepository communicationInfoRepository;
    @Autowired
    protected UserPrivateInfoRepository userPrivateInfoRepository;
    @Autowired
    protected SoldierStatusRepository soldierStatusRepository;
    @Autowired
    protected DistrictRepository districtRepository;
    @Autowired
    protected SummaryInfoRepository summaryInfoRepository;


    @GetMapping("/duzenle")
    public ModelAndView showCv(Model model){
        User user = SessionInfo.getInstance().getUser();

        ModelAndView modelAndView = new ModelAndView("CvDuzenle");
        if (communicationInfoRepository.findByUserId(user.getId()) != null) {
            model.addAttribute("cominfo", communicationInfoRepository.findByUserId(user.getId()));
        }else {
            model.addAttribute("cominfo", null);
        }
        if (userPrivateInfoRepository.findByUserId(user.getId()) != null) {
            model.addAttribute("userinfo", userPrivateInfoRepository.findByUserId(user.getId()));
        }else {
            model.addAttribute("userinfo", null);
        }
        if (workExperienceRepository.findByUserId(user.getId()) != null) {
            model.addAttribute("workinfo", workExperienceRepository.findByUserId(user.getId()));
        }else{
            model.addAttribute("workinfo", null);
        }
        if (summaryInfoRepository.findByUserId(user.getId()) != null){
            model.addAttribute("summary", summaryInfoRepository.findByUserId(user.getId()));
        }else {
            model.addAttribute("summary", null);
        }
        List<WayOfWork> wayOfWorkList = (List<WayOfWork>) wayOfWorkRepository.findAll();
        List<CompanySector> companySectorList = (List<CompanySector>) companySectorRepository.findAll();
        List<Position> positions = (List<Position>) positionRepository.findAll();
        List<Il> ilList = (List<Il>) cityRepository.findAll();
        List<Ilce> ilceList = (List<Ilce>) districtRepository.findAll();
        List<Ulke> ulkeList = (List<Ulke>) countryRepository.findAll();
        List<DriverLicense> driverLicenseList = (List<DriverLicense>) driverLicenseRepository.findAll();
        List<SoldierStatus> soldierStatusList = (List<SoldierStatus>) soldierStatusRepository.findAll();
        model.addAttribute("ilce", ilceList);
        model.addAttribute("position", positions);
        model.addAttribute("ulkeList", ulkeList);
        model.addAttribute("driverLicenseList", driverLicenseList);
        model.addAttribute("companySector", companySectorList);
        model.addAttribute("wayOfWork", wayOfWorkList);
        model.addAttribute("citys", ilList);
        model.addAttribute("soldier", soldierStatusList);
        return modelAndView;
    }

    @PostMapping("/iletisim")
    @ResponseBody
    public ResponseEntity<ResponseItem> saveCommunicationInfo(@RequestBody CommunicationInfoDTO communicationInfoDTO){
        ResponseItem responseItem = new ResponseItem();
        responseItem = cvService.saveCommunicationInfo(communicationInfoDTO);
        return ResponseEntity.ok(responseItem);
    }

    @PostMapping("/ozel")
    @ResponseBody
    public ResponseEntity<ResponseItem> saveUserPrivateInfo(@RequestBody UserPrivateInfoDTO userPrivateInfoDTO){
        ResponseItem responseItem = new ResponseItem();
        responseItem = cvService.saveUserPrivateInfo(userPrivateInfoDTO);
        return ResponseEntity.ok(responseItem);
    }

    @PostMapping("/ozet")
    @ResponseBody
    public ResponseEntity<ResponseItem> saveSummaryInfo(@RequestBody SummaryInfoDTO summaryInfo){
        ResponseItem responseItem = new ResponseItem();
        responseItem = cvService.saveSummaryInfo(summaryInfo);
        return ResponseEntity.ok(responseItem);
    }

    @PostMapping("/deneyim")
    @ResponseBody
    public ResponseEntity<ResponseItem> saveWorkExperience(@RequestBody WorkExperienceDTO workExperienceDTO){
        ResponseItem responseItem = new ResponseItem();
        responseItem = cvService.saveWorkExperience(workExperienceDTO);
        return ResponseEntity.ok(responseItem);
    }

}
