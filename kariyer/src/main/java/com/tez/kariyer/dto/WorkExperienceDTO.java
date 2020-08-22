package com.tez.kariyer.dto;

import com.tez.kariyer.model.entity.address.Ulke;
import com.tez.kariyer.model.entity.parameterTable.CompanySector;
import com.tez.kariyer.model.entity.parameterTable.WayOfWork;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class WorkExperienceDTO {

    private int id;

    private String firmsName;
    private int  position;
    private String  startDate;
    private String  finishDate;
    private String  workStatus;
    protected int companySector;
    protected int wayOfWork;
    protected int district;
    private String jopDescription;
    private String webSite;

}
