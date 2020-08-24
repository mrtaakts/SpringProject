package com.tez.kariyer.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserPrivateInfoDTO {

    private int id;
    private String gender;
    private int ulke;
    private int driverLicense;
    private String salaryExpectation;
    private int soldierStatus;

}
