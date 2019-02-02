<?php
namespace Tests\Feature;

use Tests\TestCase;

class ExampleTest extends TestCase
{
    public function testBasicTest()
    {
        // when
        $response = $this->get('/');

        // then
        $response->assertStatus(200);
    }
}
