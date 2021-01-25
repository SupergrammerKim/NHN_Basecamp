package Basecamp.guestbook.repository;

import Basecamp.guestbook.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, String> {
}
