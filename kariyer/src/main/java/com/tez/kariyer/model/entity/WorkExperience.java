package com.tez.kariyer.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class WorkExperience {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String firmsName;
    @OneToOne
    private Position position;

    private Date startDate;
    private Date finishDate;
    private Byte workStatus;

    @OneToOne
    protected CompanySector companySector;

    @OneToOne
    protected WayOfWork wayOfWork;

}
