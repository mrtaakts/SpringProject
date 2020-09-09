package com.tez.kariyer.service;

import com.tez.kariyer.dto.CompanyDTO;
import com.tez.kariyer.dto.JobApplyDTO;
import com.tez.kariyer.model.entity.Company;
import com.tez.kariyer.model.entity.JobApply;
import com.tez.kariyer.model.entity.User;
import com.tez.kariyer.model.repository.JobApplyRepository;
import com.tez.kariyer.response.ResponseItem;
import com.tez.kariyer.security.SessionInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JobApplyService {

    @Autowired
    JobApplyRepository jobApplyRepository;

    public ResponseItem saveJobApply(JobApplyDTO jobApplyDTO){
        ResponseItem responseItem = new ResponseItem();
        User user = SessionInfo.getInstance().getUser();

        try {
            JobApply jobApply= new JobApply();
            jobApply.setJobPosting(jobApplyDTO.getJobPosting());
            jobApply.setUser(user.getId());
            jobApplyRepository.save(jobApply);

            return responseItem;
        }catch (Exception e){
            responseItem.setResult(false);
            responseItem.setMessage("İşlem Başarısız");
            return responseItem;
        }

    }

}
