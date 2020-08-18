package com.tez.kariyer.model.repository.addressRepository;

import com.tez.kariyer.model.entity.address.District;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DistrictRepository extends CrudRepository<District,Integer> {

    List<District> findByCity_Id(Integer id);
}
