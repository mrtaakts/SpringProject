package com.tez.kariyer.model.repository;

import com.tez.kariyer.model.entity.JobPosting;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

public interface JobPostingRepository extends CrudRepository<JobPosting,Integer> {
    @Transactional
    @Modifying
    @Query("delete from JobPosting j where function('datediff',:current,j.startDate)>=10")
    void deletejobsss(@Param("current")Date currentDate);

    List<JobPosting> findByCompanyId(int id);

}
