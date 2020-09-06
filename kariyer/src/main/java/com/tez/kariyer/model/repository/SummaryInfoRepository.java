package com.tez.kariyer.model.repository;

import com.tez.kariyer.model.entity.SummaryInfo;
import com.tez.kariyer.model.entity.WorkExperience;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SummaryInfoRepository extends CrudRepository<SummaryInfo,Integer> {
    @Query("select summary from SummaryInfo summary where summary.user.id=:id")
    SummaryInfo findByUserId(@Param("id") Integer id);
}
