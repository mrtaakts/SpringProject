package com.tez.kariyer.service;

import com.tez.kariyer.dto.CompanyDTO;
import com.tez.kariyer.model.entity.Company;
import com.tez.kariyer.model.entity.JobPosting;
import com.tez.kariyer.model.entity.User;
import com.tez.kariyer.model.repository.CompanyRepository;
import com.tez.kariyer.model.repository.JobPostingRepository;
import com.tez.kariyer.model.repository.addressRepository.CityRepository;
import com.tez.kariyer.model.repository.parameterTableRepository.CompanySectorRepository;
import com.tez.kariyer.response.ResponseItem;
import com.tez.kariyer.security.SessionInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CompanyService {

    @Autowired
    JobPostingRepository jobPostingRepository;
    @Autowired
    CompanyRepository companyRepository;
    @Autowired
    CityRepository cityRepository;
    @Autowired
    CompanySectorRepository companySectorRepository;

    public List<JobPosting> getCompanysJobPosts(){

        try{
            User user= SessionInfo.getInstance().getUser();
            Company company= companyRepository.findByUser(user.getId());
            List<JobPosting> jobPostings= jobPostingRepository.findByCompanyId(company.getId());

            return jobPostings;
        }
        catch (Exception e)
        {
            List<JobPosting> jobPostings= new ArrayList<>();
          e.printStackTrace();
          return jobPostings;
        }

    }

    public ResponseItem saveCompany(CompanyDTO companyDTO){
        ResponseItem responseItem = new ResponseItem();
        User user = SessionInfo.getInstance().getUser();

        try {
            Company company= new Company();
            company.setUser(user);
            company.setWebsite(companyDTO.getWebsite());
            company.setSektor(companySectorRepository.findById(Integer.parseInt(companyDTO.getSektor())).get());
            company.setFoundationYear(companyDTO.getFoundationYear());
            company.setEmployeesNumber(companyDTO.getEmployeesNumber());
            company.setAddress(companyDTO.getAddress());
            company.setAbout(companyDTO.getAbout());
            company.setCompanyName(companyDTO.getCompanyName());
            company.setCity(cityRepository.findById((Integer.parseInt(companyDTO.getCity()))).get());
            companyRepository.save(company);
            responseItem.setMessage("İşlem Başarılı");
            responseItem.setResult(true);

            return responseItem;
        }catch (Exception e){
            responseItem.setResult(false);
            responseItem.setMessage("İşlem Başarısız");
            return responseItem;
        }

    }
}
