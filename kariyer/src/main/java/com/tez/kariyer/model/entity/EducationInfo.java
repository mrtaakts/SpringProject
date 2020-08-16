package com.tez.kariyer.model.entity;

import com.tez.kariyer.model.entity.parameterTable.EducationStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class EducationInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne
    protected EducationStatus educationStatus;

    private Date startDate;
    private Date finishDate;


}
