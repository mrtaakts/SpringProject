package com.tez.kariyer.model.repository.parameterTableRepository;

import com.tez.kariyer.model.entity.parameterTable.Position;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PositionRepository extends CrudRepository<Position, Integer> {
    @Query("select position from Position position where position.id =:id")
    Position findByIdd(@Param("id") Integer id);
}
