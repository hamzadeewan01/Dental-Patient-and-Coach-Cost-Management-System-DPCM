const TreatmentPlan = require("../models/treatmentPlan");

exports.createTreatmentPlan = async (req, res) => {
  try {
    const { patientId, doctorId, diagnosis, medication, instructions } =
      req.body;
    console.log(req.body)
    // Create a new treatment plan
    const treatmentPlan = await TreatmentPlan.create({
      patient: patientId,
      doctor: doctorId,
      diagnosis: diagnosis,
      medications: medication,
      instructions: instructions,
    });

    res.status(201).json({ success: true, data: treatmentPlan });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create treatment plan",
      error: error.message,
    });
  }
};
