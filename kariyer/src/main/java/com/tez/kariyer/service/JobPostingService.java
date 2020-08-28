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

            JobPosting jobPosting = new JobPosting();

            jobPosting.setCompany(companyRepository.findByUser(user.getId()));

            jobPosting.setTittle(jobPostDTO.getTitle()); //todo : Bu kadar
            jobPosting.setCity(cityRepository.findByIl(jobPostDTO.getCity()));
            jobPosting.setCompanySector(companySectorRepository.findByCompanySector(jobPostDTO.getCompanySector()));
            jobPosting.setBusinessArea(businessAreaRepository.findByBusinessArea(jobPostDTO.getBusinessArea()));
            jobPosting.setPosition(positionRepository.findByPositions(jobPostDTO.getPosition()));
            jobPosting.setWayOfWork(wayOfWorkRepository.findByWayOfWork(jobPostDTO.getWayOfWork()));
            jobPosting.setWorkexp(jobPostDTO.getWorkExperience());
            jobPosting.setDriverLicense(driverLicenseRepository.findByLicence(jobPostDTO.getDriverLicence()));
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


}
