package com.tez.kariyer.model.entity;

import com.tez.kariyer.model.entity.address.City;
import com.tez.kariyer.model.entity.parameterTable.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobPosting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne
    protected WayOfWork wayOfWork;

    @OneToOne
    protected Company company;

    @OneToOne
    protected Position position;

    @OneToOne
    protected CompanySector companySector;

    @OneToOne
    protected BusinessArea businessArea;

    protected String Information;

    @OneToOne
    protected WorkExperience workExperience;

    @OneToOne
    protected DriverLicense driverLicense;

    @OneToOne
    protected City city;

    private String tittle;

    private Date startDate;

}
