package com.tez.kariyer.model.entity.address;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Il {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "il_id")
    private int id;

    private String il;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ulke_id", nullable = false)
    protected Ulke ulke;

}
