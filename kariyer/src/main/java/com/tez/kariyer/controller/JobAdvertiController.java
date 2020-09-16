package com.tez.kariyer.controller;

import com.tez.kariyer.dto.JobAdvertiDTO;
import com.tez.kariyer.dto.JobApplyDTO;
import com.tez.kariyer.dto.JobPostDTO;
import com.tez.kariyer.model.entity.EducationInfo;
import com.tez.kariyer.model.entity.JobApply;
import com.tez.kariyer.model.entity.JobPosting;
import com.tez.kariyer.model.entity.User;
import com.tez.kariyer.model.repository.*;
import com.tez.kariyer.response.ResponseItem;
import com.tez.kariyer.security.SessionInfo;
import com.tez.kariyer.service.JobApplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/is")
public class JobAdvertiController {

    @Autowired
    JobPostingRepository jobPostingRepository;
    @Autowired
    JobApplyService jobApplyService;
    @Autowired
    JobApplyRepository jobApplyRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    EducationInfoRepository educationInfoRepository;
    @Autowired
    UserPrivateInfoRepository userPrivateInfoRepository;

    @GetMapping("/ilanlari")
    public ModelAndView show(Model model){
        ModelAndView modelAndView = new ModelAndView("JobPosting");
        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        List<JobPosting> jobPosting = (List<JobPosting>) jobPostingRepository.findAll();

        List<JobAdvertiDTO> jobAdvertiDTOs = new ArrayList<>();

        int i=0;
        for (JobPosting jobPosting1 : jobPosting){
            JobAdvertiDTO jobAdvertiDTO = new JobAdvertiDTO();
            jobAdvertiDTO.setFirm(jobPosting1.getCompany().getCompanyName());
            jobAdvertiDTO.setCity(jobPosting1.getCompany().getCity().getIl());
            jobAdvertiDTO.setDate(dateFormat.format(jobPosting1.getStartDate()));
            jobAdvertiDTO.setTittle(jobPosting1.getTittle());
            jobAdvertiDTOs.add(jobAdvertiDTO);
            i++;
        }

        model.addAttribute("job",jobAdvertiDTOs);
        return modelAndView;
    }

    @RequestMapping(value = "/ilan/{id}", method = RequestMethod.GET)
    public ModelAndView JobwithId(Model model,@PathVariable("id") Integer id){
        ModelAndView modelAndView= new ModelAndView("Jobs");
        JobPosting job= jobPostingRepository.findById(id).get();
        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        model.addAttribute("date",dateFormat.format(job.getStartDate()));
        model.addAttribute("jobs",job);
        return modelAndView;
    }


    @PostMapping("/basvuru")
    @ResponseBody
    public ResponseItem saveJobPost(@RequestBody JobApplyDTO jobApplyDTO){
        ResponseItem responseItem = new ResponseItem();

        try {

            responseItem= jobApplyService.saveJobApply(jobApplyDTO);

            return responseItem;
        }catch (Exception e){
            responseItem.setResult(false);
            responseItem.setMessage("İşlem Başarısız...");
            e.printStackTrace();
            return responseItem;
        }
    }

    @GetMapping("/basvuranlar")
    public ModelAndView showJob(Model model, int id){
        ModelAndView modelAndView = new ModelAndView("Basvuranlar");
        List<JobApply> jobApplies = jobApplyRepository.findJob(id);
        List<User> userList = new ArrayList<>();
        for (int i=0; i<jobApplies.size(); i++ ){
            User user = userRepository.findById(jobApplies.get(i).getUser()).get();
            userList.add(user);
        }
        model.addAttribute("basvuranlar", userList);
        return modelAndView;
    }

    @GetMapping("/basvuranlar/detay")
    public ModelAndView showUserDetay(Model model ,int id){
        ModelAndView modelAndView = new ModelAndView("UserDetail");
        EducationInfo educationInfo = educationInfoRepository.findByUserId(id);
        model.addAttribute("eduinfo", educationInfo);

        model.addAttribute("userinfo", userPrivateInfoRepository.findByUserId(id));
        return modelAndView;
    }




}
