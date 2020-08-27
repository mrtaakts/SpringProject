package com.tez.kariyer.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommunicationInfoDTO {

    private int id;

    private String name;
    private String surname;
    private String tittle;
    private String email;
    private String  birthDateStr;
    private Date birthDate;
    private String phone;
    private String web;
    protected int ilce;

}
