package com.tez.kariyer.api;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FakeModel {
    private String name;
    private String surName;
    private String experince;
}
