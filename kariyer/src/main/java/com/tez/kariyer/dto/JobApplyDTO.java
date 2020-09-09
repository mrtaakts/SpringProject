package com.tez.kariyer.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobApplyDTO {

    private int id;

    private int user;

    private int jobPosting;
}
