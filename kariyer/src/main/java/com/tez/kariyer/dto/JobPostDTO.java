package com.tez.kariyer.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class JobPostDTO {

    private String title;
    private String country;
    private String city;
    private String companySector;
    private String businessArea;
    private String position;
    private String wayOfWork;
    private String workExperience;
    private String DriverLicence;
    private String information;
    private String startDate;

}
