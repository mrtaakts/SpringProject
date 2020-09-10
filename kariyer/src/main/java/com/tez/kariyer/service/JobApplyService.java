package com.tez.kariyer.service;

import com.tez.kariyer.dto.JobApplyDTO;
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

    public ResponseItem saveJobApply(JobApplyDTO jobApplyDTO) {
        ResponseItem responseItem = new ResponseItem();
        User user = SessionInfo.getInstance().getUser();

            try {
                if (jobApplyRepository.findx(user.getId(), jobApplyDTO.getJobPosting()) == null) {
                    if (user.getRoles().equals("BIREYSEL_ROLE"))
                    {
                        JobApply jobApply = new JobApply();
                        jobApply.setJobPosting(jobApplyDTO.getJobPosting());
                        jobApply.setUser(user.getId());
                        jobApplyRepository.save(jobApply);
                        responseItem.setResult(true);
                        responseItem.setMessage("Başvurunuz gerçekleştirilmiştir");
                        return responseItem;
                    }
                    else {
                        responseItem.setResult(false);
                        responseItem.setMessage("Kurumsal Profille Başvuru yapamazsınız");
                        return responseItem;
                    }
                }
                else {
                    responseItem.setResult(false);
                    responseItem.setMessage("Daha önce bir iş başvurusunda bulunmuşsunuz");
                }
            } catch (Exception e) {
                responseItem.setResult(false);
                responseItem.setMessage("İşlem Başarısız");
                return responseItem;
            }
            return responseItem;
        }

    }

