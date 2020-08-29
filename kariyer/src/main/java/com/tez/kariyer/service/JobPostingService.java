package com.tez.kariyer.service;

import com.tez.kariyer.dto.CompanyDTO;
import com.tez.kariyer.dto.JobPostDTO;
import com.tez.kariyer.model.entity.Company;
import com.tez.kariyer.model.entity.JobPosting;
import com.tez.kariyer.model.entity.User;
import com.tez.kariyer.model.repository.CompanyRepository;
import com.tez.kariyer.model.repository.JobPostingRepository;
import com.tez.kariyer.model.repository.WorkExperienceRepository;
import com.tez.kariyer.model.repository.addressRepository.CityRepository;
import com.tez.kariyer.model.repository.parameterTableRepository.*;
import com.tez.kariyer.response.ResponseItem;
import com.tez.kariyer.security.SessionInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.mail.Session;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class JobPostingService {
    @Autowired
    JobPostingRepository jobPostingRepository;
    @Autowired
    CityRepository cityRepository;
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
    DriverLicenseRepository driverLicenseRepository;
    @Autowired
    CompanyRepository companyRepository;

    public ResponseItem saveJobPost(JobPostDTO jobPostDTO) {
        ResponseItem responseItem = new ResponseItem();
        User user = SessionInfo.getInstance().getUser();
        try {
            SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd");
            Date current = sf.parse(sf.format(new Date()));
            JobPosting jobPosting = new JobPosting();

            jobPosting.setCompany(companyRepository.findByUser(user.getId()));
            jobPosting.setStartDate(current);
            jobPosting.setTittle(jobPostDTO.getTitle()); //todo : Bu kadar
            jobPosting.setCity(cityRepository.findById((Integer.parseInt(jobPostDTO.getCity()))).get());
            jobPosting.setCompanySector(companySectorRepository.findById(Integer.parseInt(jobPostDTO.getCompanySector())).get());
            jobPosting.setBusinessArea(businessAreaRepository.findById(Integer.parseInt(jobPostDTO.getBusinessArea())).get());
            jobPosting.setPosition(positionRepository.findById(Integer.parseInt(jobPostDTO.getPosition())).get());
            jobPosting.setWayOfWork(wayOfWorkRepository.findById(Integer.parseInt(jobPostDTO.getWayOfWork())).get());
            jobPosting.setWorkexp(jobPostDTO.getWorkExperience());
            jobPosting.setDriverLicense(driverLicenseRepository.findById(Integer.parseInt(jobPostDTO.getDriverLicence())).get());
            jobPosting.setInformation(jobPostDTO.getInformation());
            jobPostingRepository.save(jobPosting);
            responseItem.setMessage("İşlem Başarılı");
            responseItem.setResult(true);

            return responseItem;
        } catch (Exception e) {
            responseItem.setResult(false);
            responseItem.setMessage("İşlem Başarısız");
            return responseItem;
        }
    }
 public void expiredJobs()  {

     try {
         SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd");
         Date current = sf.parse(sf.format(new Date()));

         System.out.println(current);
         jobPostingRepository.deletejobsss(current);
     }
     catch (Exception e){
         System.out.println(e);
     }

     System.out.println("job tamamlandı");
 }

}
