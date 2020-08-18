package com.tez.kariyer.service.cvService;

import com.tez.kariyer.model.entity.*;
import com.tez.kariyer.model.repository.CommunicationInfoRepository;
import com.tez.kariyer.model.repository.SummaryInfoRepository;
import com.tez.kariyer.model.repository.UserPrivateInfoRepository;
import com.tez.kariyer.model.repository.WorkExperienceRepository;
import com.tez.kariyer.response.ResponseItem;
import com.tez.kariyer.security.SessionInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CvService {

    @Autowired
    protected CommunicationInfoRepository communicationInfoRepository;
    @Autowired
    protected UserPrivateInfoRepository userPrivateInfoRepository;
    @Autowired
    protected SummaryInfoRepository summaryInfoRepository;
    @Autowired
    protected WorkExperienceRepository workExperienceRepository;

    public ResponseItem saveCommunicationInfo(CommunicationInfo communicationInfo){
        ResponseItem responseItem = new ResponseItem();

        try {
            responseItem.setResult(true);
            responseItem.setMessage("İşlem Başarılı!");
            communicationInfoRepository.save(communicationInfo);
        }catch (Exception e){
            responseItem.setResult(false);
            responseItem.setMessage("İşlem Başarısız!");
            e.printStackTrace();
        }
        return responseItem;
    }
    public ResponseItem saveUserPrivateInfo(UserPrivateInfo userPrivateInfo){
        ResponseItem responseItem = new ResponseItem();

        try {
            responseItem.setResult(true);
            responseItem.setMessage("İşlem Başarılı!");
            userPrivateInfoRepository.save(userPrivateInfo);
        }catch (Exception e){
            responseItem.setResult(false);
            responseItem.setMessage("İşlem Başarısız!");
            e.printStackTrace();
        }
        return responseItem;
    }

    public ResponseItem saveSummaryInfo(SummaryInfo summaryInfo){
        ResponseItem responseItem = new ResponseItem();
        User user = SessionInfo.getInstance().getUser();
        try {
            responseItem.setResult(true);
            responseItem.setMessage("İşlem Başarılı!");
            summaryInfo.setUser(user);
            summaryInfoRepository.save(summaryInfo);
        }catch (Exception e){
            responseItem.setResult(false);
            responseItem.setMessage("İşlem Başarısız!");
            e.printStackTrace();
        }
        return responseItem;
    }

    public ResponseItem saveWorkExperience(WorkExperience workExperience){
        ResponseItem responseItem = new ResponseItem();

        try {
            responseItem.setResult(true);
            responseItem.setMessage("İşlem Başarılı!");
            workExperienceRepository.save(workExperience);
        }catch (Exception e){
            responseItem.setResult(false);
            responseItem.setMessage("İşlem Başarısız!");
            e.printStackTrace();
        }
        return responseItem;
    }
}
