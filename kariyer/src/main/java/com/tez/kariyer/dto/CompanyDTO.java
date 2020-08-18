package com.tez.kariyer.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyDTO {

    private int id;

    private String companyName;

    private String sektor;

    private String foundationYear;

    private String address;

    private String employeesNumber;

    private String website;

    private String about;

}
