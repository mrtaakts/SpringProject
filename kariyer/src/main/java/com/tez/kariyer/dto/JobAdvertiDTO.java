package com.tez.kariyer.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobAdvertiDTO {

    private int id;

    private String date;

    private String tittle;

    private String firm;

    private String city;

}
