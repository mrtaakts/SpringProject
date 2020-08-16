package com.tez.kariyer.model.repository;

import com.tez.kariyer.model.entity.DriverLicense;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DriverLicenseRepository extends CrudRepository<DriverLicense,Integer> {
}
