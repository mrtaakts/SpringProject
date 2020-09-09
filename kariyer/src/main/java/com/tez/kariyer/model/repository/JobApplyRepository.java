package com.tez.kariyer.model.repository;

import com.tez.kariyer.model.entity.JobApply;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface JobApplyRepository extends CrudRepository<JobApply, Integer> {


    @Query("select jobapply from JobApply jobapply where jobapply.user=:userid and jobapply.jobPosting=:jobpostid")
    JobApply findx(@Param("userid") int userid, @Param("jobpostid") int jobpostid);

}
