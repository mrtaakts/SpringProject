package com.tez.kariyer.model.repository.parameterTableRepository;

import com.tez.kariyer.model.entity.parameterTable.DriverLicense;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface DriverLicenseRepository extends CrudRepository<DriverLicense,Integer> {

    DriverLicense findByLicence(String DriverLicense);

    @Query("select driver from DriverLicense driver where driver.id =:id")
    DriverLicense findByIdd(@Param("id") Integer id);
}
