package com.tez.kariyer.service;

import com.tez.kariyer.dto.CompanyDTO;
import com.tez.kariyer.model.entity.Company;
import com.tez.kariyer.model.repository.CompanyRepository;
import com.tez.kariyer.response.ResponseItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompanyService {
    @Autowired
    CompanyRepository companyRepository;

    public ResponseItem saveCompany(CompanyDTO companyDTO)
    {
        ResponseItem responseItem = new ResponseItem();

        try
        {
            Company company = new Company();
            company.setCompanyName(companyDTO.getCompanyName());
            company.setAbout(companyDTO.getAbout());
            company.setAddress(companyDTO.getAddress());
            company.setEmployeesNumber(companyDTO.getEmployeesNumber());
            company.setFoundationYear(companyDTO.getFoundationYear());
            company.setSektor(companyDTO.getSektor());
            company.setWebsite(companyDTO.getWebsite());
            companyRepository.save(company);
            responseItem.setResult(true);
            responseItem.setMessage("İşlem Başarılı");

        }
        catch (Exception e)
        {
            responseItem.setResult(false);
            responseItem.setMessage("İşlem Başarısız");
            e.printStackTrace();
        }
        return responseItem;
    }



}
