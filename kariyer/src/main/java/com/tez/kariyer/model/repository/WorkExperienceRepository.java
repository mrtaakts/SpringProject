package com.tez.kariyer.model.repository;

import com.tez.kariyer.model.entity.WorkExperience;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkExperienceRepository extends CrudRepository<WorkExperience, Integer> {

    @Query("select work from WorkExperience work where work.id=:id")
    WorkExperience findByIdd(@Param("id") Integer id);

}
