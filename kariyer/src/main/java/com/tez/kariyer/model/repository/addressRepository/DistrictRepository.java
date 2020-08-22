package com.tez.kariyer.model.repository.addressRepository;

import com.tez.kariyer.model.entity.address.Ilce;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DistrictRepository extends CrudRepository<Ilce,Integer> {

    List<Ilce> findByCity_Id(Integer id);

    @Query("select ilce from Ilce ilce where ilce.id=:id")
    Ilce findByIdd(@Param("id") Integer id);
}
