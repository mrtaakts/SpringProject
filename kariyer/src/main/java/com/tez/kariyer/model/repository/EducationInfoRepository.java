package com.tez.kariyer.model.repository;

import com.tez.kariyer.model.entity.EducationInfo;
import com.tez.kariyer.model.entity.SummaryInfo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface EducationInfoRepository extends CrudRepository<EducationInfo, Integer> {

    @Query("select edu from EducationInfo edu where edu.user.id=:id")
    EducationInfo findByUserId(@Param("id") Integer id);

}
