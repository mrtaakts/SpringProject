package com.tez.kariyer.model.entity.address;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Ilce {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "ilce_id")
    private  int id;
    private String ilce;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "il_id", nullable = false)
    private Il city;

    private int ilceMernisKod;


}
