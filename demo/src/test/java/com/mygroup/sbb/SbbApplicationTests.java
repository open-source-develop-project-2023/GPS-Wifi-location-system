package com.mygroup.sbb;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.mygroup.sbb.entity.Question;
import com.mygroup.sbb.repository.QuestionRepository;

@SpringBootTest
class SbbApplicationTests {
	
	@Autowired
	private QuestionRepository questionRepository;

	// @Test
	// void testJpa() {
	// 	Question q1 = new Question();
	// 	q1.setSubject("sbb가 무엇인가요?");
	// 	q1.setContent("sbb에 대해서 알고 싶습니다.");
	// 	q1.setCreateDate(LocalDateTime.now());
	// 	this.questionRepository.save(q1);

	// 	Question q2 = new Question();
	// 	q2.setSubject("스프링부트 모델 질문입니다.");
	// 	q2.setContent("id는 자동으로 생성되나요?");
	// 	q2.setCreateDate(LocalDateTime.now());
	// 	this.questionRepository.save(q2);
	// }

	// @Test
	// void testJpa() {
	// 	List<Question> all = this.questionRepository.findAll();
	// 	assertEquals(4, all.size());

	// 	Question q = all.get(0);
	// 	assertEquals("sbb가 무엇인가요?", q.getSubject());
	// }

	// @Test
	// void testJpa() {
	// 	Question q = this.questionRepository.findBySubject("sbb가 무엇인가요?");
	// 	assertEquals(1, q.getId());
	// }

	@Test
	void testJpa() {
		assertEquals(3, this.questionRepository.count());
		Optional<Question> oq = this.questionRepository.findById(3);
		assertTrue(oq.isPresent());
		Question q = oq.get();
		this.questionRepository.delete(q);
		assertEquals(2, this.questionRepository.count());
	}

}
