package com.tez.kariyer.service;

import com.tez.kariyer.model.entity.Company;
import com.tez.kariyer.model.entity.JobPosting;
import com.tez.kariyer.model.entity.User;
import com.tez.kariyer.model.repository.CompanyRepository;
import com.tez.kariyer.model.repository.JobPostingRepository;
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
}
