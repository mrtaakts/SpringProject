package com.tez.kariyer.model.entity;

import com.tez.kariyer.model.entity.address.Il;
import com.tez.kariyer.model.entity.parameterTable.CompanySector;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String companyName;

    @OneToOne
    private CompanySector sektor;

    private String foundationYear;

    private String address;

    private String employeesNumber;

    private String website;

    private String about;

    @OneToOne
    protected Il city;
    @OneToOne
    protected User user;



}
