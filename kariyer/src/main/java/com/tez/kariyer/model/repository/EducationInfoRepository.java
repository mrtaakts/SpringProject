package com.tez.kariyer.model.repository;

import com.tez.kariyer.model.entity.EducationInfo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EducationInfoRepository extends CrudRepository<EducationInfo, Integer> {
}
