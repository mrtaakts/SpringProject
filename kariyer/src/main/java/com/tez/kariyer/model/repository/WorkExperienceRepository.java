package com.tez.kariyer.model.repository;

import com.tez.kariyer.model.entity.WorkExperience;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkExperienceRepository extends CrudRepository<WorkExperience, Integer> {


}
