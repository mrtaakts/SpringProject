package com.tez.kariyer.controller;

import com.tez.kariyer.dto.JobAdvertiDTO;
import com.tez.kariyer.model.entity.JobPosting;
import com.tez.kariyer.model.repository.JobPostingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/is")
public class JobAdvertiController {

    @Autowired
    JobPostingRepository jobPostingRepository;

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

    @RequestMapping(value = "/is/ilan/{id}", method = RequestMethod.GET)
    public ModelAndView JobwithId(Model model,@PathVariable("id") Integer id){
        ModelAndView modelAndView= new ModelAndView("Jobs");
        Optional<JobPosting> job= jobPostingRepository.findById(id);
        model.addAttribute("jobs",job);
        return modelAndView;
    }
}
