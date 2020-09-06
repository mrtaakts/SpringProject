package com.tez.kariyer.dto;

import com.tez.kariyer.model.entity.address.Il;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.OneToOne;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EducationInfoDTO {

    private int id;

    protected String  educationStatus;
    protected String notOrt;
    protected String university;
    protected int il;
    private String  fakulte;
    private String  bolum;
    private String  dil;
    private String startDate;
    private String finishDate;

}
